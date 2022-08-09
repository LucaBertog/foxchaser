/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { PathString, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import {
  Container,
  Form,
  TitleInput,
  Editor,
  Publish,
  SendIcon,
} from './TextPost.styles';
import { LogoLoader } from '../../..';
import { useCreatePostMutation } from '../../../../services/api/post.api';
import { EDITOR_JS_TOOLS } from '../../../../constants/editorjs.constants';

const schema = yup
  .object()
  .shape({
    title: yup.string().max(200).required('Titulo é obrigatório'),
  })
  .required();

const TextPost: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();
  const [editor, setEditor] = useState<EditorJS>();

  useEffect(() => {
    if (!editor) {
      const editor1 = new EditorJS({
        holder: 'editorJS',
        tools: {
          header: {
            // @ts-ignore
            class: Header,
            shortcut: 'CMD+SHIFT+H',
            inlineToolbar: true,
          },
        },
        placeholder: 'Vamos escrever alguma coisa legal ai',
        minHeight: 0,
      });
      setEditor(editor1);
    }
  }, []);

  const onSave = () => {
    if (editor) {
      editor
        .save()
        .then((outputData: any) => {
          console.log(outputData);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  };

  if (editor && editor.toolbar) editor.toolbar.open();

  const onSubmit = async (e: any) => {
    const data: {
      title: string;
    } = e;
  };

  // const titleError = errors.title as any;
  // const textError = errors.text as any;

  return (
    <Container>
      {isCreating ? (
        <LogoLoader />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TitleInput {...register('title')} id='title' placeholder='Título' />
          <Editor>
            <div id='editorJS' />
            <Publish type='submit' onClick={onSave}>
              <SendIcon />
              Publicar
            </Publish>
          </Editor>
        </Form>
      )}
    </Container>
  );
};

export default TextPost;
