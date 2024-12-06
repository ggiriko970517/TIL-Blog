import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faUser } from '@fortawesome/free-solid-svg-icons';
import './BlogCard.scss';


function BlogCard({ imgSrc }) {
  return (
    <div className="blog-card">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ imgSrc}
        style={{objectFit:'cover',
                height: '200px',
                width: '100%'
        }}      
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* 좋아요, 댓글 아이콘 */}
        <div className="d-flex justify-content-center
        gap-2" id="thumbupcomment">
          <div className="card-user">

            {/* 유저 프로필 */}
            <FontAwesomeIcon icon={faUser} size="2xl" className="user"/>
            </div> 

              {/* like */}
              
              <Button variant="warning">
              <FontAwesomeIcon icon={faThumbsUp} />Like
              </Button>
              {/* comment */}
              <Button variant="primary">
              <FontAwesomeIcon icon={faComment} /> Comment
              </Button>
            
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BlogCard;