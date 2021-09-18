import {useState, useEffect} from "react"
import request from "../common/request"

export function useKnowledgeCheckBlocks() {
	const [knowledgeCheckBlocks, setKnowledgeCheckBlocks] = useState([])
	useEffect(() => {
		request.get(`http://localhost:5000/knowledge-check-blocks`)
			.then((res) => res.json())
			.then((json) => {
				setKnowledgeCheckBlocks(json.knowledgeCheckBlocks)
			})
	}, [])
	return knowledgeCheckBlocks
}