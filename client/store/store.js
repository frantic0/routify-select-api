import { writable, readable } from "svelte/store";

export let tutorials = writable([
		{
			id: 1,
			text: `Default`,
      chapter_dir: "01-introduction",
      section_dir: "01-basics",
			href: "/tutorial/01-introduction/01-basics/",
			content: `Tab 41`,
		},
		{
			id: 2,
			text: `Bits`,
      chapter_dir: "01-introduction",
      section_dir: "02-layout",
			href: "/tutorial/01-introduction/02-layout/",
			content: `Tab 42`,
		},
		{
			id: 3,
			text: `IXI`,
      chapter_dir: "02-languages",
      section_dir: "02-language-2",
			href: "/tutorial/02-languages/02-language-2/",
			content: `Tab 43`,
		},
		{
			id: 4,
			text: `Maya`,
      chapter_dir: "03-integration",
      section_dir: "03-model-2",
			href: "/tutorial/03-integration/03-model-2/",
			content: `Tab 44`,
		},
	]);

export let currentTutorial = writable(tutorials[1]);
