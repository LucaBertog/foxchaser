/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import moment from 'moment';
import { Container, Title } from './Home.styles';
import { LogoLoader, Post, TopNews } from '../../components';
import { PostSeparator, PostsWrapper } from '../../assets/styles/GlobalStyles';
import { UserContext } from '../../contexts/User.context';
import { useGetTimelineQuery } from '../../services/api/post.api';

const Home: React.FC = () => {
  const { id, username } = useContext(UserContext);

  const { data: posts, isFetching } = useGetTimelineQuery(id || '');

  return (
    <Container>
      <Title>
        {(moment().format('HH') <= '12' && 'Bom dia,') ||
          (moment().format('HH') >= '12' && 'Boa tarde,') ||
          (moment().format('HH') >= '18' && 'Boa noite,')}{' '}
        {username}
      </Title>
      <TopNews />
      {/* <OfferCards /> */}
      <PostsWrapper>
        {isFetching ? (
          <LogoLoader />
        ) : (
          posts?.posts.map((post) => (
            <div key={post._id}>
              <Post
                postId={post._id}
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
