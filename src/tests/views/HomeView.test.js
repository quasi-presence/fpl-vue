import { describe, expect, test } from "vitest"
import { render, screen } from '@testing-library/vue'
import HomeView from '../../views/HomeView.vue'

describe('View: HomeView.vue', () => {
  test('it should work', () => {
    render(HomeView)
    screen.getByText('Home page')
  })
})
