import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input } from './Input';
import { DefaultTheme, ThemeProvider } from 'styled-components';

export default {
    title: 'Core/Input',
    component: Input,
} as Meta;

const Template: Story<Parameters<typeof Input>[0]> = (args) => <Input {...args} />;

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    type: 'email',
    placeholder: 'Email',
    value: '',
};

export const Normal = Template.bind({});
Normal.args = {
    disabled: false,
    type: 'email',
    placeholder: 'Email',
    value: '',
};
