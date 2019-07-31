import fetch from "./utils/fetch";

export function getIndex(locale) {
	return fetch(`pages/${locale}/index.json`)
}

export function getSections(locale) {
	return getIndex(locale).then(({ chapters }) => chapters.reduce(
		(sections, chapters) => {
			sections.push(...chapters.sections);
			return sections;
		}, [])
	)
}

export function getSectionByLink(link, locale) {
	return getSections(locale)
		.then(sections => sections.find(section => section.link === link))
}
