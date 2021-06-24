/*global describe, it, beforeEach, afterEach */

import proclaim from 'proclaim';
import AudioPlayer from './../src/js/audio.js';

describe('AudioPlayer API', () => {
	it('is defined', () => {
		proclaim.isFunction(AudioPlayer);
	});
});

describe('AudioPlayer instance', () => {
	let containerElement;
	let audioElement;
	const testAudioURL = 'demo.mp3';

	beforeEach(() => {
		containerElement = document.createElement('div');
		document.body.appendChild(containerElement);
		containerElement.innerHTML = `<span class="g-audio">
			Bring to the table win-win survival
			<audio controls>
				<source src="${testAudioURL}" type="audio/mpeg">
			</audio>
		</span>`;
		audioElement = containerElement.querySelector('.g-audio');
	});

	afterEach(() => {
		containerElement = null;
	});

	it('constructor', () => {
		const a = audioElement;
		const audioURL = a.getElementsByTagName('source')[0].getAttribute('src');
		const player = new AudioPlayer(a, audioURL);

		proclaim.isInstanceOf(player, AudioPlayer);
		proclaim.deepStrictEqual(a, audioElement);
		proclaim.deepStrictEqual(audioURL, testAudioURL);
	});
});
