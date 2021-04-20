import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

interface Props {
    onSearch(query: string): void
}

export const SearchForm = ({ onSearch }: Props) => {
    const [query, setQuery] = useState('')
    const queryRef = useRef<HTMLInputElement>(null)
    // const queryRef2 = useRef<HTMLInputElement>(null)


    useEffect(() => { console.log('after each render real dom') })
    useLayoutEffect(() => { console.log('before render real dom') })

    useEffect(() => {
        console.log('after first render real dom')
        // document.getElementById('query_id')?.focus()
        queryRef.current?.focus()
    }, [])


    console.log('render vdom')
    return (
        <div>
            <div className="input-group mb-3">
                {/* <input type="text" onChange={e => setQuery(e.target.value)} ref={queryRef2} /> */}
                
                <input type="text" className="form-control" placeholder="Search" id="query_id" ref={queryRef}
                    onChange={e => setQuery(e.target.value)}
                    onKeyUp={e => e.code === 'Enter' && onSearch(query)}
                />

                <button className="btn btn-outline-secondary" type="button" onClick={() => onSearch(query)}>Search</button>
            </div>
        </div>
    )
}
