import { describe, expect, test, beforeEach } from "vitest"
import { setActivePinia, createPinia } from 'pinia'
import { render, screen } from '@testing-library/vue'
import HomeView from '../../views/HomeView.vue'

describe('View: HomeView.vue', () => {
  beforeEach(() => { setActivePinia(createPinia()) })

  test('it should work', () => {
    render(HomeView)
    screen.getByText('Fantasy Points League')
    screen.getByPlaceholderText('Email address')
    screen.getByPlaceholderText('Password')
    screen.getByText('Join Now')
    screen.getByText('Log In')
  })
})
