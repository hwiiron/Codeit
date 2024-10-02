import "./Header.css";
// import profileImg from "../assets/profileImg.svg";

function Header() {
  return (
    // <header>
    //   <div className="header__inner">
    //     <h1>
    //       <a className="header__logo" href="/"></a>
    //     </h1>

    //     <ul className="header__nav">
    //       <li>
    //         <a href="">자유게시판</a>
    //       </li>

    //       <li>
    //         <a href="">중고마켓</a>
    //       </li>
    //     </ul>

    //     <a href="" className="header__profile">
    //       <img src={profileImg} alt="프로필 이미지" />
    //     </a>
    //   </div>
    // </header>
    <header>
      <div class="inner">
        <h1>
          <a class="logo" href="/">
            로고
          </a>
        </h1>

        <a class="login" href="login.html">
          로그인
        </a>
      </div>
    </header>
  );
}

export default Header;
