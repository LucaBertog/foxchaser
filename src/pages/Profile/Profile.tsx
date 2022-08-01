/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { PostSeparator, PostsWrapper } from '../../assets/styles/GlobalStyles';
import { LogoLoader, Post, ProfileInfo } from '../../components';
import { ProfileContext } from '../../contexts/Profile.context';
import { UserContext } from '../../contexts/User.context';
import { useGetPostsByUserIdQuery } from '../../services/api/post.api';
import { useGetUserByUsernameQuery } from '../../services/api/user.api';
import { Container } from './Profile.styles';

const Profile: React.FC = () => {
  const { username } = useParams();
  const {
    id,
    name,
    username: currentUserUsername,
    description,
    profilePicture,
    coverPicture,
  } = useContext(UserContext);

  const { data: userProfile, isLoading } = useGetUserByUsernameQuery(
    username === currentUserUsername ? currentUserUsername : username
  );

  const { data: posts, isFetching } = useGetPostsByUserIdQuery(
    userProfile?.user.id || id
  );

  const profileContext = useMemo(
    () =>
      username === currentUserUsername
        ? {
            id,
            name,
            username: currentUserUsername,
            description,
            profilePicture,
            coverPicture,
          }
        : {
            id: userProfile?.user.id || '',
            name: userProfile?.user.name || '',
            username: userProfile?.user.username || '',
            description: userProfile?.user.description || '',
            profilePicture: userProfile?.user.profilePicture || '',
            coverPicture: userProfile?.user.coverPicture || '',
          },
    [userProfile, id, currentUserUsername]
  );

  return (
    <ProfileContext.Provider value={profileContext}>
      {isLoading ? (
        <Container>
          <LogoLoader />
        </Container>
      ) : (
        <Container>
          <ProfileInfo />
          <PostsWrapper>
            {isFetching ? (
              <LogoLoader />
            ) : (
              posts?.posts.map((post) => (
                <div key={post._id}>
                  <Post
                    userId={post.userId}
                    postId={post._id}
                    image={post.image.split(' ')[0]}
                    postDate={post.createdAt}
                  />
                  <PostSeparator />
                </div>
              ))
            )}
          </PostsWrapper>
        </Container>
      )}
    </ProfileContext.Provider>
  );
};

export default Profile;
