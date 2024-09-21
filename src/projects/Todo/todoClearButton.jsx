/* eslint-disable react/prop-types */
export const ToDoClearButton = ({handleClearTask}) => {
    return (
        <section>
            <button className="clear-btn" onClick={handleClearTask}>
                CLEAR
            </button>
        </section>
    )
}