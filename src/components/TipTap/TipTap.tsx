"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import MenuBar from "./Menubar";
import TextAlign from "@tiptap/extension-text-align";
import "./TipTap.css";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Color.configure({
        types: ["textStyle"],
      }),
    ],
    injectCSS: true,
    content:
      "<p>Hello World! 🌎️</p><h2>This is Heading...</h2><p>This is some text and this should <strong>bold</strong> <em>italic</em> and <u>underline.</u></p><ul><li><p>This is Unordered List</p></li><li><p>This is also</p></li></ul><ol><li><p>This is Ordered List</p></li><li><p>This is alos</p></li></ol><p><s>This text is removed.</s></p><blockquote><p>This is blockquote..</p></blockquote>",
  });

  function handlePublish() {
    const html = editor?.getHTML();
    console.log(html);
    alert("Blog Published..!");
  }

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <button
        onClick={handlePublish}
        className="bg-green-500 text-white px-4 py-2 rounded mt-3"
      >
        Publish
      </button>
    </>
  );
};

export default Tiptap;
