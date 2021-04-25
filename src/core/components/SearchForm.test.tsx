import { render, screen, logRoles } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SearchForm } from "./SearchForm"

describe.only('SearchForm', () => {

    const setup = () => {
        const searchSpy = jest.fn()
        const { container } = render(<SearchForm onSearch={searchSpy} />)
        return { container, searchSpy }
    }

    test('emits query to parent on enter', () => {
        const { searchSpy, container } = setup()

        const input = screen.getByPlaceholderText('Search',{})
        userEvent.type(input, 'ala ma kota{enter}')

        expect(searchSpy).toHaveBeenCalledWith('ala ma kota')
        // logRoles(container)
    })


    test.todo('should focus on entry')


})