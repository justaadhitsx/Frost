"use client";
import React from "react";
import { Highlight, Language } from "prism-react-renderer";
import customTheme from "./customTheme";

type CodeBlockProps = {
  code: string;
  language?: Language;
};

export default function CodeBlock({ code, language = "jsx" }: CodeBlockProps) {
  return (
    <Highlight code={code.trim()} language={language} theme={customTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} rounded-md p-4 overflow-x-auto text-sm leading-relaxed font-mono border border-black/5 shadow-xl/2`}
          style={{ ...style }}
        >
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line });
            return (
              <div key={i} {...lineProps}>
                {line.map((token, j) => {
                  const tokenProps = getTokenProps({ token });
                  return <span key={j} {...tokenProps} />;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}
