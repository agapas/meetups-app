import { useRef } from "react";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import styles from "./NewMeetupForm.module.css";

export const NewMeetupForm = (props) => {
  const titleInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const addressInputRef = useRef(null);
  const infoInputRef = useRef(null);

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

  const clearForm = () => {
    titleInputRef.current.value = "";
    imageInputRef.current.value = "";
    addressInputRef.current.value = "";
    infoInputRef.current.value = "";
  };

  return (
    <Card>
      <form onSubmit={onFormSubmit}>
        <div className={styles.fields}>
          <label htmlFor="title">Meetup Title</label>
          <input id="title" type="text" required ref={titleInputRef} />

          <label htmlFor="image">Meetup Image Url</label>
          <input id="image" type="url" required ref={imageInputRef} />

          <label htmlFor="address">Meetup Address</label>
          <input id="address" type="text" required ref={addressInputRef} />

          <label htmlFor="info">Meetup Info</label>
          <textarea id="info" required rows={5} ref={infoInputRef} />
        </div>
        <div className={styles.btn}>
          <Button onClick={clearForm}>Clear Form</Button>
          <Button type="submit">Add Meetup</Button>
        </div>
      </form>
    </Card>
  );
};
