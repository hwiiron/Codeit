import { useState } from 'react';
import ProfilePhoto from './ProfilePhoto';
import Button from './Button';
import styles from './TextInputForm.module.css';

function TextInputForm({
  onSubmit,
  currentUserInfo,
  placeholder,
  buttonText,
  buttonDisabled,
}) {
  const [content, setContent] = useState('');

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(content);
    setContent('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <ProfilePhoto
          photo={currentUserInfo?.photo}
          name={currentUserInfo?.name}
        />
      </div>
      <textarea
        name="content"
        placeholder={placeholder}
        value={content}
        onChange={handleInputChange}
      />
      <Button disabled={buttonDisabled || !content} type="submit">
        {buttonText}
      </Button>
    </form>
  );
}

export default TextInputForm;
