import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Ellipsis from '../../components/ellipsis.vue'

describe('ellipsis.vue', () => {
  test('renders the correct style', () => {
    const content = 'this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text'
    const wrapper = mount(Ellipsis, {
      props: { content },
    })
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['r-ellipsis-container']),
    )
  })
})
