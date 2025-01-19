import { useState } from 'react';
import Body from '../components/Body';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProfilePage = () => {
  const [mails, setMails] = useState([
    {
      id: 1,
      content: 'Life as a university student feels like a constant balancing act. Between coursework, part-time jobs, and family expectations, its hard not to feel stretched thin. Some nights, I lie awake wondering if all this effort will pay off or if Im just chasing an impossible ideal. Still, every small victory an assignment submitted, a concept understood reminds me why I started this journey. Even in the struggle, Im learning resilience and finding pieces of myself I didnt know existed.',
      comments: ['I know it feels overwhelming now, but this phase of life is shaping you in ways you cant yet see. With every challenge you face, youre building strength and learning how to adapt and persevere. Over time, the balancing act will become second nature, and youll find more clarity in your goals and priorities. Keep believing in yourself this hard work will lead to a future where youre not just surviving but thriving.']
    },
    {
      id: 2,
      content: 'I attended UofTHackathon 12 at UofT and had an amazing time.',
      comments: ['Thats amazing, I also went to UofTHack 12 too!']
    }
  ]);

  const [newComment, setNewComment] = useState({});
  
  const handleCommentChange = (mailId, value) => {
    setNewComment({ ...newComment, [mailId]: value });
  };

  const addComment = (mailId) => {
    const updatedMails = mails.map(mail => {
      if (mail.id === mailId) {
        return {
          ...mail,
          comments: [...mail.comments, newComment[mailId]]
        };
      }
      return mail;
    });
    setMails(updatedMails);
    setNewComment({ ...newComment, [mailId]: '' });
  };

  return (
    <Container>
      <Body sidebar>
        <h1>Your Profile</h1>
        <h2>Your Sent Mails</h2>
        {mails.map(mail => (
          <div key={mail.id} className="mail-section" style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <p><strong>Mail Content:</strong></p>
            <p style={{ whiteSpace: 'pre-wrap' }}>{mail.content}</p>
            <hr />
            <p><strong>Comments:</strong></p>
            <ul>
              {mail.comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
            {/* <Form>
              <Form.Group controlId={`comment-${mail.id}`}>
                <Form.Control
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment[mail.id] || ''}
                  onChange={(e) => handleCommentChange(mail.id, e.target.value)}
                />
              </Form.Group>
              <Button
                variant="primary"
                style={{ marginTop: '10px' }}
                onClick={() => addComment(mail.id)}
                disabled={!newComment[mail.id]?.trim()}
              >
                Add Comment
              </Button>
            </Form> */}
          </div>
        ))}
      </Body>
    </Container>
  );
};

export default ProfilePage;
