/* eslint-disable react/prop-types */
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';

const TextField = ({ setContent, activeContent = '' }) => {
  const editor = useEditor({
    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
    extensions: [
      Placeholder.configure({
        placeholder: 'Write something...',
      }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    content: `${activeContent}`,
  });

  return (
    <>
      <EditorContent
        editor={editor}
        spellCheck={false}
        className="focus:outline-none focus:bg-blue-50 focus:py-2 focus:px-3 h-full dark:bg-slate-800 dark:text-blue-100 dark:focus:bg-slate-700"
      />
      <MenuBar editor={editor} />
    </>
  );
};

export default TextField;
