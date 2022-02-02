interface TesteProps{ 
    teste: {
    id: string;
    title: string;
    state: string;
    }
}

export function Teste(props: TesteProps, onArchiveTask, onPinTask) {
    return (
        <div className={`list-item ${props.teste.state}`}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={props.teste.state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                />
                <span className="checkbox-custom" onClick={() => onArchiveTask(props.teste.id)} />
            </label>
            <div className="title">
                <input type="text" value={props.teste.title} readOnly={true} placeholder="Input title" />
            </div>

            <div className="actions" onClick={event => event.stopPropagation()}>
                {props.teste.state !== 'TASK_ARCHIVED' && (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={() => onPinTask(props.teste.id)}>
                        <span className={`icon-star`} />
                    </a>
                )}
            </div>
        </div>
    )
}