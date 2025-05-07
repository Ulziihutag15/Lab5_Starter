// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber

test('is 1122 a phone number', () => {
  expect(isPhoneNumber(1122)).toBe(false);
});

test('is (123)456-7890 a phone number', () => {
  expect(isPhoneNumber("(123)456-7890")).toBe(true);
});

test('is 111-222-3333 a phone number', () => {
  expect(isPhoneNumber("111-222-3333")).toBe(true);
});

test('is hi a phone number', () => {
  expect(isPhoneNumber("hi")).toBe(false);
});

//isEmail

test('is uujii@ a valid email', () => {
  expect(isEmail("uujii@")).toBe(false);
});

test('is @gmail.com a valid email', () => {
  expect(isEmail("@gmail.com")).toBe(false);
});

test('is uujii@gmail.com a valid email', () => {
  expect(isEmail("uujii@gmail.com")).toBe(true);
});

test('is uujii@ucsd.edu a valid email', () => {
  expect(isEmail("uujii@ucsd.edu")).toBe(true);
});

//isStrongPassword

test('is uujii@ucsd.edu a valid password', () => {
  expect(isStrongPassword("uujii@ucsd.edu")).toBe(false);
});

test('is uujii@ucsdedu a valid password', () => {
  expect(isStrongPassword("uujii@ucsdedu")).toBe(false);
});

test('is uujii@ucsdedu a valid password', () => {
  expect(isStrongPassword("uujiiucsdedu")).toBe(true);
});

test('is haha a valid password', () => {
  expect(isStrongPassword("haha")).toBe(true);
});

//isDate

test('is 12/24/2000 a valid date', () => {
  expect(isDate("12/24/2000")).toBe(true);
});

test('is 12/24/200 a valid date', () => {
  expect(isDate("12/24/200")).toBe(false);
});

test('is 12/24/200 a valid date', () => {
  expect(isDate("12/100/1940")).toBe(false);
});

test('is 12/24/2000 a valid date', () => {
  expect(isDate("1/24/2000")).toBe(true);
});

//isHexColor

test('is 333 a valid hex code', () => {
  expect(isHexColor("333")).toBe(true);
});

test('is #333 a valid hex code', () => {
  expect(isHexColor("#333")).toBe(true);
});

test('is #1234122 a valid hex code', () => {
  expect(isHexColor("#1234122")).toBe(false);
});

test('is # a valid hex code', () => {
  expect(isHexColor("#")).toBe(false);
});