export interface Streamer {
  name: string;
  description: string;
  twitch?: string;
  youtube?: string;
  imageUrl: string;
}

export const STREAMERS: Streamer[] = [
  {
    name: 'Nivek',
    description:
      'Coding Angular, TypeScript, RxJS, Qwik, and other things regarding modern development approches with fun!\n          Let\'s learn together. Join my streams for tips, tricks, and a good time!"💻 Google Developer Expert | ⚽ Real Madrid y nada mas!',
    twitch: 'https://www.twitch.tv/nivekdev',
    youtube: 'https://www.youtube.com/@nivekDev',
    imageUrl: 'nivek',
  },
  {
    name: 'Brandon Roberts',
    description:
      'Brandon is an OSS Advocate, focused on community engagement, content creation, and collaboration. He enjoys learning new things, helping other developers be successful, speaking at conferences, and contributing to open source. He is a GDE, technical writer, and a maintainer of the NgRx project building libraries for reactive Angular applications, and creator of AnalogJS, the fullstack meta-framework for Angular.',
    youtube: 'https://www.youtube.com/@BrandonRobertsDev',
    imageUrl: 'brandon',
  },
  {
    name: 'Chau Tran',
    description:
      'I am a developer who is highly interested in TypeScript. My tech stack has been full-stack TS such as Angular, React with TypeScript and NestJS.',
    twitch: 'https://www.twitch.tv/nartc',
    youtube: 'https://www.youtube.com/c/ChauTran',
    imageUrl: 'chau',
  },
  {
    name: 'Muhammad Ahsan Ayaz',
    description:
      'Muhammad Ahsan Ayaz is a Software Architect, an author of 2 world-wide published books (the Angular Cookbook), and a Google Developers Expert in Angular. He loves helping the startup ecosystem and product owners bring their ideas to life. And to help make the world a better place using technology.',
    twitch: 'https://www.twitch.tv/codewithahsan',
    youtube: 'https://www.youtube.com/c/codewithahsan',
    imageUrl: 'ahsanayaz',
  },
  {
    name: 'Jason Warner',
    description:
      "I enjoy everything related to code and being a dev. However, my only skills are showing up and being lucky and I'm not sure if luck is a talent.",
    twitch: 'https://www.twitch.tv/xocomil',
    youtube: 'https://www.youtube.com/channel/UCzF8hdwni3db3UZ7P3uKBkQ/videos',
    imageUrl: 'jason',
  },
  {
    name: 'webdave',
    description:
      'I am an Angular consultant and trainer with a passion: sharing knowledge. I love to speak and teach at meetups and conferences. I am also an organizer of the Hamburg Angular Meetup and a GDE in Angular.',
    youtube: 'https://www.youtube.com/@webdave_de',
    twitch: 'https://www.twitch.tv/webdave_de',
    imageUrl: 'webdave',
  },
];
