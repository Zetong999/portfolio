import type { Meta, StoryObj } from '@storybook/nextjs-vite';



import BlogCard  from './Blog';

const meta = {
  title: 'Example/BlogCard',
  component: BlogCard,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

    args: {
        imageSrc: '/cat1.png',
        title: 'Debug Linux With Systemctl',
        tag: 'Latest',
        description: 'Debugging issues with systemctl on Arch Linux.',
        tags: ['Arch Linux', 'Happy Share'],
    },
};


export const Secondary: Story = {
  
 args: {
    imageSrc: '/cat2.png',
    title: 'Secure your Arch Linux with Wazuh',
    
    description:
      'Secure your Arch Linux system with Wazuh, a free, open-source security monitoring platform.',
    tags: ['Happy Share', 'Arch Linux'],
  },
};
export const Tertiary: Story ={
    args: {
    imageSrc: '/cat3.png',
    title: 'LangChain Conversational Memory Comparison',
    
    description:
      'Comparison of different memory types in LangChain for better conversational AI experiences.',
    tags: ['AI', 'LLM', 'LangChain'],
  },
};
export const Forth: Story =  {
    args:
  {
    imageSrc: '/cat4.png',
    title: 'Good Bye MKDocs, Hello Astro',
    tag: 'Coming Soon!',
    description:
      'Migrating documentation from MKDocs to Astro for better performance and flexibility.',
    tags: [],
  },
};
export const Fifth: Story ={
    args: {
    imageSrc: '/cat5.png',
    title: 'My AI Journey: From College to LLM Community',
    
    description:
      'Sharing my journey learning AI, from university projects to joining the LLM open source community.',
    tags: ['AI', 'LLM', 'Biography'],
  },
};
export const Sixth: Story = {
  args:
  {
    imageSrc: '/cat6.png',
    title: 'Build a Digital Signage with Magic Mirror',
    
    description:
      'Learn how to build a smart digital signage using MagicMirror and a spare monitor.',
    tags: ['Digital Signage', 'Happy Share', 'MagicMirror'],
  },
};
