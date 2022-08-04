/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
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
      <Title onClick={() => toast('cu')}>
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
          posts?.posts.map((post) => {
            const image = post?.image && post.image.split(' ')[0];
            const text = post.text && post.text;

            return (
              <div key={post._id}>
                <Post
                  userId={post.userId}
                  postId={post._id}
                  image={image}
                  text={text}
                  postDate={post.createdAt}
                />
                <PostSeparator />
              </div>
            );
          })
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
