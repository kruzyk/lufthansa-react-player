import { Meta, Story } from "@storybook/react";
import { PlaylistList } from "./PlaylistList";


export default {
    title: 'Playlists/List',
    component: PlaylistList,
    // argTypes: { onEdit: { action: 'clicked' } }
    decorators: [
        Story => <div style={{ maxWidth: 500, margin: '0 auto' }} ><Story /></div>
    ]
} as Meta

// export WithoutSelection {
//     title: "Playlists/List",
//     component: PlaylistList,
//     decorators: [
//         (Story) => (
//             <div style={{ maxWidth: 500, margin: "0 auto" }}>
//                 <Story />
//             </div>
//         ),
//     ],
// } as Meta;

type ListProps = Parameters<typeof PlaylistList>[0];

const Template: Story<ListProps> = (args) => <PlaylistList {...args} />

export const Selected = Template.bind({})

Selected.args = {
    playlists: [{
        id: '123',
        name: 'Playlista Prywatna 😇',
        public: false,
        description: 'no i co ja dzis polubie?..🤔'
    },
    {
        id: '234',
        name: 'Playlista Prywatna 😇',
        public: false,
        description: 'no i co ja dzis polubie?..🤔'
    }],
    selectedId: '123'
}

export const WithoutSelection = Template.bind({})

WithoutSelection.args = {
    playlists: [{
        id: '123',
        name: 'Playlista Prywatna 😇',
        public: false,
        description: 'no i co ja dzis polubie?..🤔'
    },
    {
        id: '234',
        name: 'Playlista Prywatna 😇',
        public: false,
        description: 'no i co ja dzis polubie?..🤔'
    }],
    selectedId: ''
}