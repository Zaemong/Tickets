"use client"

import {
  Button,
  Container,
  Group,
  Paper,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { FormEvent } from "react";

const PostNewPage = () => {
  const form = useForm({
    initialValues: {
      title: "",
      description: "",
    },
  });
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <Container>
      <Paper p="md" m="md" shadow="md">
        <form>
          <TextInput
            withAsterisk
            label="タイトル"
            placeholder="タイトルを入力してください"
            {...form.getInputProps("title")}
          />
          <Textarea
            label="説明"
            placeholder="説明を入力してください"
            {...form.getInputProps("description")}
            mt="xs"
          />

          <Group mt="md">
            <Button type="submit" onClick={handleSubmit}>登録</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default PostNewPage;
