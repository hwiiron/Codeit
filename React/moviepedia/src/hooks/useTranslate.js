import { useLocale } from "../contexts/LocaleContext";

const dict = {
  ko: {
    "confirm button": "확인",
    "cancel button": "취소",
    "edit button": "수정",
    "delete button": "삭제",
    "title placeholder": "제목을 입력해주세요.",
    "content placeholder": "제목을 입력해주세요.",
    newest: "최신순",
    best: "베스트순",
    "terms of service": "서비스 이용약관",
    "privacy policy": "개인정보 처리방침",
    "load more": "더 보기",
  },
  en: {
    "confirm button": "OK",
    "cancel button": "Cancel",
    "edit button": "Edit",
    "delete button": "Delete",
    "title placeholder": "Enter a title.",
    "content placeholder": "Enter the content.",
    newest: "Newest",
    best: "Best",
    "terms of service": "Terms of Service",
    "privacy policy": "Privacy Policy",
    "load more": "Load More",
  },
};

function useTranslate() {
  const locale = useLocale();
  const translate = (key) => dict[locale][key] || "";
  return translate;
}

export default useTranslate;
