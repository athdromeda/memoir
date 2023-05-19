/* eslint-disable react/prop-types */
import ArrowGoBackFillIcon from 'remixicon-react/ArrowGoBackFillIcon';
import ArrowGoForwardFillIcon from 'remixicon-react/ArrowGoForwardFillIcon';
import BoldIcon from 'remixicon-react/BoldIcon';
import ItalicIcon from 'remixicon-react/ItalicIcon';
import StrikethroughIcon from 'remixicon-react/StrikethroughIcon';
import CodeFillIcon from 'remixicon-react/CodeFillIcon';
import HeadingIcon from 'remixicon-react/HeadingIcon';
import CodeBoxLineIcon from 'remixicon-react/CodeBoxLineIcon';
import ListUnorderedIcon from 'remixicon-react/ListUnorderedIcon';
import ListOrderedIcon from 'remixicon-react/ListOrderedIcon';
import DoubleQuotesLIcon from 'remixicon-react/DoubleQuotesLIcon';
import SeparatorIcon from 'remixicon-react/SeparatorIcon';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const isActive = 'bg-blue-400';

  return (
    <div className="bg-blue-300 dark:bg-slate-800 dark:text-blue-50 dark:border-t-2 dark:border-blue-500 flex gap-4 py-3 fixed bottom-0 left-0 w-full px-4">
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <ArrowGoBackFillIcon className="dark:text-blue-50" />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <ArrowGoForwardFillIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? isActive : ''}
      >
        <BoldIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? isActive : ''}
      >
        <ItalicIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? isActive : ''}
      >
        <StrikethroughIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? isActive : ''}
      >
        <HeadingIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? isActive : ''}
      >
        <ListUnorderedIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? isActive : ''}
      >
        <ListOrderedIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? isActive : ''}
      >
        <CodeFillIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? isActive : ''}
      >
        <CodeBoxLineIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? isActive : ''}
      >
        <DoubleQuotesLIcon />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <SeparatorIcon />
      </button>
    </div>
  );
};

export default MenuBar;