import React, { useState } from 'react';
import styles from './BlogPostForm.module.css';

const BlogPostForm = ({ post = null, onSubmit }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [author, setAuthor] = useState(post?.author || '');
  const [date, setDate] = useState(post?.date || '');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!title) newErrors.title = 'Required';
    if (!content) newErrors.content = 'Required';
    if (!author) newErrors.author = 'Required';
    if (!date) newErrors.date = 'Required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setLoading(true);
      onSubmit({ title, content, author, date });
      setLoading(false);
    }
  };

  return (
    <form className={styles.blogPostForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className={styles.error}>{errors.title}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {errors.content && <p className={styles.error}>{errors.content}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {errors.author && <p className={styles.error}>{errors.author}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="date">Publication Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {errors.date && <p className={styles.error}>{errors.date}</p>}
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : post ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  );
};

export default BlogPostForm;
