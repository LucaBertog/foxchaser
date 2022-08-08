/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
// import { PathString, useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
import EditorJS from '@editorjs/editorjs';
// @ts-ignore
import edjsHTML from 'editorjs-html';
import Header from '@editorjs/header';
import { Container } from './TextPost.styles';
// import LogoLoader from '../../../LogoLoader/LogoLoader';
// import { useCreatePostMutation } from '../../../../services/api/post.api';
import { EDITOR_JS_TOOLS } from '../../../../constants/editorjs.constants';

// const schema = yup
//   .object()
//   .shape({
//     title: yup.string().max(200).required('Titulo é obrigatório'),
//     text: yup.string().max(500).required('Conteudo é obrigatório'),
//   })
//   .required();

const TextPost: React.FC = () => {
  const edjsParser = edjsHTML();
  // const navigate = useNavigate();
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });
  // const [createPost, { isLoading: isCreating }] = useCreatePostMutation();
  const [editor, setEditor] = useState<EditorJS>();

  useEffect(() => {
    const _editor = new EditorJS({
      holder: 'editorJS',
      tools: {
        header: {
          // @ts-ignore
          class: Header,
          shortcut: 'CMD+SHIFT+H',
          inlineToolbar: true,
        },
      },
      onReady: () => console.log('EditorJS está prontinho da silva'),
      placeholder: 'Vamos escrever alguma coisa legal ai',
    });
    setEditor(_editor);
  }, []);

  const onSave = () => {
    if (editor) {
      editor
        .save()
        .then((outputData: any) => {
          console.log(edjsParser.parse(outputData));
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  };

  if (editor && editor.toolbar) editor.toolbar.open();

  // const onSubmit = async (e: any) => {
  //   const data: {
  //     title: string;
  //     text: PathString;
  //   } = e;
  // };

  // const titleError = errors.title as any;
  // const textError = errors.text as any;

  return (
    <Container>
      {/* {isCreating ? (
        <LogoLoader />
      ) : ( */}
      <div id='editorJS' />
      <button type='submit' onClick={onSave}>
        Salvar
      </button>
      {/* )} */}
    </Container>
  );
};

export default TextPost;
