/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { Container, Title } from './Home.styles';
import { LogoLoader, Post } from '../../components';
import { PostSeparator, PostsWrapper } from '../../assets/styles/GlobalStyles';
import { UserContext } from '../../contexts/User.context';
import { useGetTimelineQuery } from '../../services/api/post.api';

const Home: React.FC = () => {
  const { id, username } = useContext(UserContext);

  const { data: posts, isFetching } = useGetTimelineQuery(id || '');

  return (
    <Container>
      <Title>Bom dia, {username}</Title>
      <PostsWrapper>
        {isFetching ? (
          <LogoLoader />
        ) : (
          posts?.posts.map((post) => (
            <div key={post._id}>
              <Post
                userId={post.userId}
                image={post.image.split(' ')[0]}
                postDate={post.createdAt}
              />
              <PostSeparator />
            </div>
          ))
        )}
      </PostsWrapper>
    </Container>
  );
};
// <Container>
//   <StatisticSummary />
//   <TopNews />
//   <OfferCards />
// </Container>

export default Home;
