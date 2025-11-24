import type { Preview } from '@storybook/nextjs-vite'
import { ReactNode } from 'react'
import '@/styles/globals.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        order: [
          'Guide',
          'Form',
          [
            'Input',
            'Checkbox',
            'Switch',
            'RadioGroup',
            'TextArea',
            'SelectBox',
          ],
          'UI',
        ],
      },
    },
    a11y: {
      test: 'todo', // todo / error / off
    },

    // Docs 활성화
    docs: {
      autodocs: true,
      inlineStories: true,
      container: ({ children }: { children: ReactNode }) => (
        <div className="custom-docs">{children}</div>
      ),
      codePanel: true,
    },
  },
}

export default preview
