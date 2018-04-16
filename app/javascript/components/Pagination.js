import React from 'react';


const Pagination = (props) => {

        const batchSize = 4

        const routeMessage = () => {
            if (props.currentRoute === "[popular]=mosthearted"){
                return <span> cities from our "most hearted" list.</span>
            } else if (props.currentRoute === "[hearted]=yourhearted"){
                return <span> cities that you've "hearted".</span>
            } else {
                return <span> potentially great places to live.   </span>
            }
        }
        
        const pageNumbers = []
            if (props.totalPages < (batchSize + 1)){
                for(var i = props.startPage; i <= props.totalPages; i++){
                    pageNumbers.push(i)
                }
            } else {
                let endPage = 0
                if ((props.startPage + batchSize) > props.totalPages) {
                    endPage = props.totalPages
                } else {
                    endPage = props.startPage + (batchSize - 1)
                }
                for(var i = props.startPage; i <= endPage; i++){
                    pageNumbers.push(i)
            }
            
        }

        let startPage = 0
        if (props.page > 1){
            startPage = props.page * props.perPage - (props.perPage - 1)
        } else {
            startPage = props.page
        }
        
        const renderPageNumbers = pageNumbers.map(number => {
                if (props.page === number) {
                    return <li key={number} id={number} onClick={()=>props.pageChange(null, number)}><span style={{color: '#FC4A1A'}}>{number}</span></li>
                } else {
                    return <li key={number} id={number} onClick={()=>props.pageChange(null, number)}>{number}</li>
                }

            }
            
        )


        return (
                    <div>
                        <ul className="page-numbers">Showing {startPage}-{(props.count - 1) + startPage} of &nbsp;<span className="bold">{props.totalCount}</span>&nbsp;{routeMessage()}&nbsp;
                            {(props.startPage <= 4) ? null : < li onClick={()=>props.pageChange("prev", null)}> ⇦ </li>}
                            {renderPageNumbers}
                            {pageNumbers.includes(props.totalPages) ? null : < li onClick={()=>props.pageChange("next", null)}> ⇨ </li>}
                        </ul>
                    </div>
        )
    
    
}
export default Pagination;