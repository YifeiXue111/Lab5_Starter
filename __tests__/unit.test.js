// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

import * as functions from '../code-to-unit-test/unit-test-me.js';

test('isPhoneNumber validates correct phone number with dashes', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber validates correct phone number with parentheses', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber rejects invalid phone number with too few digits', () => {
  expect(functions.isPhoneNumber('123-456-789')).toBe(false);
});
test('isPhoneNumber rejects non-phone string', () => {
  expect(functions.isPhoneNumber('hello')).toBe(false);
});

test('isEmail validates simple email', () => {
  expect(functions.isEmail('user@domain.com')).toBe(true);
});
test('isEmail validates another simple email', () => {
  expect(functions.isEmail('test@website.org')).toBe(true);
});
test('isEmail rejects email with subdomain', () => {
  expect(functions.isEmail('user@sub.domain.co')).toBe(false);
});
test('isEmail rejects invalid email format', () => {
  expect(functions.isEmail('user@')).toBe(false);
});

test('isStrongPassword validates password with letters and numbers', () => {
  expect(functions.isStrongPassword('Pass1234')).toBe(true);
});
test('isStrongPassword validates password with only letters', () => {
  expect(functions.isStrongPassword('password')).toBe(true);
});
test('isStrongPassword rejects password with special characters', () => {
  expect(functions.isStrongPassword('Secure#2023')).toBe(false);
});
test('isStrongPassword rejects password too short', () => {
  expect(functions.isStrongPassword('Pass')).toBe(true);
});

test('isDate validates correct date format MM/DD/YYYY', () => {
  expect(functions.isDate('12/31/2023')).toBe(true);
});
test('isDate validates correct date format with single digits', () => {
  expect(functions.isDate('1/1/2023')).toBe(true);
});
test('isDate rejects invalid date format', () => {
  expect(functions.isDate('2023-12-31')).toBe(false);
});
test('isDate rejects non-date string', () => {
  expect(functions.isDate('12/31/23')).toBe(false);
});

test('isHexColor validates 3-digit hex color', () => {
  expect(functions.isHexColor('#FFF')).toBe(true);
});
test('isHexColor validates 6-digit hex color', () => {
  expect(functions.isHexColor('#FF5733')).toBe(true);
});
test('isHexColor rejects invalid hex color', () => {
  expect(functions.isHexColor('#GG')).toBe(false);
});
test('isHexColor rejects non-hex string', () => {
  expect(functions.isHexColor('red')).toBe(false);
});

