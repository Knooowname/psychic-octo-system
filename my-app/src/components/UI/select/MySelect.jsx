

export const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
    <select value={value} onChange={event => onChange(event.target.value)}>
        <option disabled value="value1">{defaultValue}</option>
        {options.map(option => 
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
        )}
    </select>
    )
}