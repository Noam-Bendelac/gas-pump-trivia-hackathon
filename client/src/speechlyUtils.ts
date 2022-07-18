import { useSpeechContext } from "@speechly/react-client"
import { Segment } from '@speechly/browser-client'
import { useCallback, useEffect, useRef } from "react"


/**
 * usage:
 * useOnFinalSpeechSegment(
 *  useFilterByIntent('someIntent',
 *  useFilterByEntity('someEntity',
 *  useCallback((value, segment) => {
 *    // do something
 *  }, [...])))
 * )
 * 
 */


export const useOnFinalSpeechSegment = (onFinalSegment: (segment: Segment) => void) => {
  const { segment } = useSpeechContext()
  const prevSegment = useRef<Segment>()
  
  useEffect(() => {
    // segment is possibly not finished
    if (segment?.isFinal) {
      // segment is finished
      // console.log(segment, prevSegment.current, segment === prevSegment.current)
      if (segment !== prevSegment.current) {
        // save reference so we can ignore getting this same reference again
        prevSegment.current = segment
        onFinalSegment(segment)
      }
    }
  }, [segment, onFinalSegment])
}



export const useFilterByIntent = (
  intent: string,
  onIntentMatch: (segment: Segment) => void,
) => useCallback((segment: Segment) => {
  if (segment.intent.intent === intent) {
    onIntentMatch(segment)
  }
}, [intent, onIntentMatch])

export const useFilterByEntity = (
  entityName: string,
  onEntityMatch: (value: string, segment: Segment) => void,
) => useCallback((segment: Segment) => {
  const entity = segment.entities.find(entity => entity.type === entityName)
  const value = entity?.value
  if (value !== undefined) {
    onEntityMatch(value, segment)
  }
}, [entityName, onEntityMatch])


