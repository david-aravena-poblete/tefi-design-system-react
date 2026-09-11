"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Code } from "@/components/typography/code";
import { CodeBlock } from "@/components/typography/code-block";
import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";

import "./markdown.css";

import type { MarkdownProps } from "./markdown.types";

export function Markdown({
  children,
  className,
}: MarkdownProps) {
  const componentClassName = className
    ? `tefi-markdown ${className}`
    : "tefi-markdown";

  return (
    <div className={componentClassName}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <Heading as="h1" size="2xl">
              {children}
            </Heading>
          ),

          h2: ({ children }) => (
            <Heading as="h2" size="xl">
              {children}
            </Heading>
          ),

          h3: ({ children }) => (
            <Heading as="h3" size="lg">
              {children}
            </Heading>
          ),

          p: ({ children }) => (
            <Text size="md">
              {children}
            </Text>
          ),

          strong: ({ children }) => (
            <Text as="strong" weight="bold">
              {children}
            </Text>
          ),

          em: ({ children }) => (
            <Text as="em">
              {children}
            </Text>
          ),

          code: ({ children }) => (
            <Code>
              {children}
            </Code>
          ),

          pre: ({ children }) => (
            <CodeBlock>
              {children}
            </CodeBlock>
          ),

          ul: ({ children }) => (
            <ul>
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol>
              {children}
            </ol>
          ),

          li: ({ children }) => (
            <li>
              {children}
            </li>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}