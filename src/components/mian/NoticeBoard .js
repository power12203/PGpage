import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React from 'react';

// 공지사항 컴포넌트 정의
const NoticeBoard = ({ notices }) => {
  return (
    <div style={styles.noticeBoard}>
      <h2 style={styles.title}>매장 공지사항</h2>
      <ul style={styles.noticeList}>
        {notices.map((notice, index) => (
          <li key={index} style={styles.noticeItem}>
            {notice}
          </li>
        ))}
      </ul>
    </div>
  );
};

// 스타일 정의
const styles = {
  noticeBoard: {
    width: "400px",
    height:"400px",
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '1.5em',
    marginBottom: '16px',
  },
  noticeList: {
    listStyleType: 'none',
    padding: '0',
  },
  noticeItem: {
    backgroundColor: '#f9f9f9',
    padding: '8px',
    marginBottom: '8px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default NoticeBoard;
