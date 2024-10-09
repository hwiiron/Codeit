import logo from '../assets/grayLogo.svg';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import instagramIcon from '../assets/instagram.svg';
import styles from './Footer.module.css';
import Container from './Container';

function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <ul className={styles.links}>
          <li>코드댓 소개</li>
          <li>개인정보 취급방침</li>
          <li>사용자 이용약관</li>
          <li>자주 묻는 질문</li>
        </ul>
        <ul className={styles.info}>
          <li>(주)코드댓</li>
          <li>대표 | 강영훈 </li>
          <li>개인정보보호책임자 | 강영훈 </li>
          <li>대표 번호 | 02-****-**** </li>
          <li>사업자번호 | ***-**-****</li>
          <li>통신판매업 | 제****-서울**-****호 </li>
          <li>주소 | 서울특별시 중구 청계천로 100 코드댓 </li>
        </ul>
        <div className={styles.icons}>
          <img src={logo} alt="codethat" />
          <div className={styles.sns}>
            <img src={facebookIcon} alt="facebook icon" />
            <img src={twitterIcon} alt="twitter icon" />
            <img src={instagramIcon} alt="instagram icon" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
