/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React, { useState } from 'react'
import { SelectBox, SelectBoxProps } from '@/components/Form/Selectbox'

const meta: Meta<SelectBoxProps> = {
  title: 'Form/SelectBox',
  component: SelectBox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
    placeholder: { control: 'text' },
    custom: { control: 'boolean' },
    value: { table: { disable: true } },
    onChange: { action: 'changed' },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          position: 'relative',
          minWidth: '100%',
          minHeight: '30rem',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <div style={{ margin: 'auto' }}>
          <Story />
        </div>
      </div>
    ),
  ],
}
export default meta
type Story = StoryObj<SelectBoxProps>

/** 기본 SelectBox */
export const Default: Story = {
  args: {
    options: [
      { label: '옵션 1', value: 1 },
      { label: '옵션 2', value: 'option2' },
      { label: '옵션 3', value: 'option3' },
    ],
    placeholder: '선택하세요',
    value: '옵션 1',
  },
  render: (args) => {
    const [value, setValue] = useState<string | number>()
    return <SelectBox {...args} value={value} onChange={setValue} />
  },
  parameters: {
    docs: {
      source: {
        code: `<SelectBox
  options={[
    { label: '옵션 1', value: 'option1' },
    { label: '옵션 2', value: 'option2' },
    { label: '옵션 3', value: 'option3' },
  ]}
  placeholder="선택하세요"
  value={value}
  onChange={setValue}
/>`,
      },
    },
  },
}

/** 브라우저 기본 select */
export const Native: Story = {
  args: {
    options: [
      { label: '옵션 1', value: 'option1' },
      { label: '옵션 2', value: 'option2' },
      { label: '옵션 3', value: 'option3' },
    ],
    placeholder: '브라우저 기본 select',
    custom: false,
    value: 'option3',
  },
  render: (args) => {
    const [value, setValue] = useState<string | number>()
    return <SelectBox {...args} value={value} onChange={setValue} />
  },
  parameters: {
    docs: {
      source: {
        code: `<SelectBox
  options={[
    { label: '옵션 1', value: 'option1' },
    { label: '옵션 2', value: 'option2' },
    { label: '옵션 3', value: 'option3' },
  ]}
  placeholder="브라우저 기본 select"
  value={value}
  onChange={setValue}
  custom={false}
/>`,
      },
    },
  },
}
