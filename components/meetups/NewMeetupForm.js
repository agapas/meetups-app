import { useRef } from "react";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import styles from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const infoInputRef = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImageUrl = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredInfo = infoInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImageUrl,
      address: enteredAddress,
      description: enteredInfo,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input id="title" type="text" required ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input id="image" type="url" required ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Meetup Address</label>
          <input id="address" type="text" required ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="info">Meetup Info</label>
          <textarea id="info" required rows="5" ref={infoInputRef} />
        </div>
        <Button type="submit">Add Meetup</Button>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
