import React from 'react'

export default function Tile({name,title}) {
    return (
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1 className="text-capitallize font-weight-bold">
    {name} <strong className="text-blue">{title}</strong>
                    </h1>
                </div>
            </div>
        )
}
