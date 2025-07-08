import type { Meta, StoryObj } from '@storybook/nextjs';



import ProjectCard  from './ProjectCover';

const meta = {
  title: 'Example/ProjectCard',
  component: ProjectCard,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    imageSrc: '/envex-logo.png',
  title: 'Envex',
  tag: 'New',
  description: 'Envex is a platform that connects users with environmental experts for personalized consultations and advice on sustainability practices.',
  },
};

export const Secondary: Story = {
  args: {
    imageSrc: '/fingervein-logo.png',
  title: 'FingerVein',
  tag: 'Beta',
  description: 'FingerVein is a biometric authentication system that uses finger vein patterns for secure access to devices and applications.',
  },
};
