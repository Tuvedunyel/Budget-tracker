import { render } from "@testing-library/react"
import List from "../components/Main/List/List"

describe('List unit test', () => {
    it('List is rendered', () => {
        render(<List />)
    })
})