/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 22:52:57
 * @LastEditTime: 2019-09-18 22:52:57
 * @LastEditors: your name
 */
import { validUsername, isExternal } from '@/utils/validate.js'

describe('Utils:validate', () => {
  it('validUsername', () => {
    expect(validUsername('admin')).toBe(true)
    expect(validUsername('editor')).toBe(true)
    expect(validUsername('xxxx')).toBe(false)
  })
  it('isExternal', () => {
    expect(isExternal('https://github.com/cqh52306/ele-template')).toBe(true)
    expect(isExternal('http://github.com/cqh52306/ele-template')).toBe(true)
    expect(isExternal('github.com/cqh52306/ele-template')).toBe(false)
    expect(isExternal('/dashboard')).toBe(false)
    expect(isExternal('./dashboard')).toBe(false)
    expect(isExternal('dashboard')).toBe(false)
  })
})
