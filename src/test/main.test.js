import { render } from "@testing-library/react"
import Main from "../components/Main/Main"

describe('main card test unit', () => {
    it('main is rendered', () => {
        render(<Main />)
    })
})