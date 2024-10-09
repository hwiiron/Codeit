import { useState } from 'react';
import { getQuestions } from '../api';
import DateText from '../components/DateText';
import ListPage from '../components/ListPage';
import Warn from '../components/Warn';
import Card from '../components/Card';
import Avatar from '../components/Avatar';
import styles from './QuestionListPage.module.css';
import searchBarStyles from '../components/SearchBar.module.css';
import searchIcon from '../assets/search.svg';

function QuestionItem({ question }) {
  return (
    <Card className={styles.questionItem} key={question.title}>
      <div className={styles.info}>
        <p className={styles.title}>
          {question.title}
          {question.answers.length > 0 && (
            <span className={styles.count}>[{question.answers.length}]</span>
          )}
        </p>
        <p className={styles.date}>
          <DateText value={question.createdAt} />
        </p>
      </div>
      <div className={styles.writer}>
        <Avatar
          photo={question.writer.profile.photo}
          name={question.writer.name}
        />
      </div>
    </Card>
  );
}

function QuestionListPage() {
  const [keyword, setKeyword] = useState('');
  const questions = getQuestions();

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  return (
    <ListPage
      variant="community"
      title="커뮤니티"
      description="코드댓의 2만 수강생들과 함께 공부해봐요."
    >
      <form className={searchBarStyles.form}>
        <input
          name="keyword"
          value={keyword}
          placeholder="검색으로 질문 찾기"
          onChange={handleKeywordChange}
        />
        <button type="submit">
          <img src={searchIcon} alt="검색" />
        </button>
      </form>

      <p className={styles.count}>총 {questions.length}개 질문</p>

      {questions.length === 0 ? (
        <Warn
          className={styles.emptyList}
          title="조건에 맞는 질문이 없어요."
          description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요."
        />
      ) : (
        <div className={styles.questionList}>
          {questions.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
        </div>
      )}
    </ListPage>
  );
}

export default QuestionListPage;
