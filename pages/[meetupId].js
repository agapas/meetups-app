import { Card } from "../components/common/Card";
import { MeetupDetails } from "../components/meetups/MeetupDetails";

const MeetupDetailsPage = () => {
  return (
    <MeetupDetails
      title="A first meetup"
      image="https://cdn.shopify.com/s/files/1/0705/7793/articles/29587144738_600x.jpg"
      address="33 Harcourt St, Saint Kevin's, Dublin 2"
      description="This is a first in-person meetup which you definitely should not miss. We're aiming to build an enthusiastic and engaged community around this exciting area and hope to learn lots about how people are using their tools. Also, there will be free pizza and drinks and it will be a lot of fun!"
    />
  );
};

export default MeetupDetailsPage;
