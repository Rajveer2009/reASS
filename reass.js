#!/usr/bin/env node
'use strict';
var c = require('chalk');
var link = require('terminal-link');
var img = require('terminal-image');
var got = require('got');
var ww = require('word-wrap');
var iq = require('inquirer');
var opn = require('open');

got('https://i.postimg.cc/0QqxR0kh/avatar-thinner.png', {responseType:'buffer'})
.then(function (image) { return img.buffer(image.body, {width: '20%'}) })
.then(function (image) {

console.log(image)
console.log(ww(`
Hello, this is ${c.blue.bold("Rajveer Sıngh Saggu")}!

I'm a passionate ${c.bgRed.white.bold("software developer")} living on ${c.bold("Mars")}.
I love learning about new things. I like to ${c.bold("make learn and make new things")}.
I love ${c.underline.bold.green("open source development")} and I build things on my GitHub profile ${link(c.red.bold('github.com/rajveer2009'), 'https://github.com/rajveer2009')}.
I love ${c.bold.yellow("JavaScript")} and ${c.bold.red("Python")}.

`.trim(), { width: 200, trim: true }));

console.log('\n\n')
iq.prompt([
  {
    type: 'list',
    message: 'Do you want to learn more about me?',
    name: 'open',
    choices: [
      { name: c.gray(`💻  What am I doing about Open Source? (${c.bold('GitHub')})`), value: 'https://github.com/rajveer2009/' },
      { name: c.blue(`🏹  Portfolio, what I Know Did and wanna Do" (${c.bold('Portfolio')})`), value: 'https://rajveer2009.github.io/' },
      { name: c.red('👋  Nope. Bye.\n'), value: false }
    ]
  }
]).then(function (a) { opn(a.open); process.exit() }).catch(function () {});
}).catch(function (e) { console.log(e)});
