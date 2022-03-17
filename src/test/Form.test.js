import { render } from "@testing-library/react"
import Form from "../components/Main/Form/Form"

describe('Form component unit test', () => {
    it('Form component is rendered', () => {
        render(<Form />)
    })
})