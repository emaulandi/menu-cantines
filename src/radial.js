import { select } from 'd3-selection';
import { min, max, groups } from 'd3-array';
import { scaleBand, scaleLinear, scaleSequential } from 'd3-scale';
import { lineRadial, pointRadial, curveLinear, arc } from 'd3-shape';
import { interpolatePRGn } from 'd3-scale-chromatic';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import fr from 'dayjs/locale/fr';
dayjs.extend(weekOfYear);
dayjs.locale('fr');

export const initRadial = (svgId, svgSide, data_weeks, label) => {

  // delete any previous element
  select(`#${svgId}`).selectChildren().remove();

  // build chart
  const baseline = 0;
  const margin = 10;
  const y_ticks_num = 3;
  const svgInnerRadius = svgSide / 6;
  const svgOuterRadius = svgSide / 2 - margin;
  const localBound = max(data_weeks.map(({ count }) => count))
  
  const xScale = scaleBand(
    data_weeks.map(d => d.week),
    [0, 2 * Math.PI]
  );

  const weeks = xScale.domain().map(week => ({
    week,
    month : dayjs().week(week).format('MMMM')
  }));

  const months = groups(weeks, d => d.month).map(([month, values]) => ({ month, week: values[0].week }));
  
  const yScale = scaleLinear()
    .domain([min(data_weeks, d => d.count), max(data_weeks, d => d.count)])
    .range([svgInnerRadius, svgOuterRadius])

  const line = lineRadial()
    .curve(curveLinear)
    .angle(d => xScale(d.week));

  const color = scaleSequential([-localBound, localBound], interpolatePRGn);
  
  const arcDefinition = arc()
    .innerRadius(d => yScale(Math.max(baseline,d.count)))
    .outerRadius(d => yScale(Math.min(baseline,d.count)))
    .startAngle(d => xScale(d.week))
    .endAngle(d => xScale(d.week) +  xScale.bandwidth()*0.95)
    .padAngle(0.01)
 
  const xAxis = g => g
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .call(g => g.selectAll("g")
      .data(months)
      .join("g")
        .each((d) => d.id = `${svgId}-month-tick-${d.month}`)
        .call(g => g.append("path")
          .attr("stroke", "#000")
          .attr("stroke-opacity", 0.2)
          .attr("d", d => `
            M${pointRadial(xScale(d.week), svgInnerRadius)}
            L${pointRadial(xScale(d.week), svgOuterRadius)}
          `)
        ).call(g => g.append("path")
          .attr("id", d => d.id)
          .attr("fill", "none")
          .attr("d", d => `
            M${pointRadial(xScale(d.week), svgOuterRadius)}
            A${svgOuterRadius},${svgOuterRadius} 0,0,1 ${pointRadial(xScale(d.week + 4), svgOuterRadius)}
          `)
        ).call(g => g.append("text")
          .append("textPath")
          .attr("startOffset", 6)
          .attr("xlink:href", d => `#${d.id}`)
              .attr("class", "bar")
          .text(d => d.month)
        )
     ) 

  const yAxis = g => g
    .attr("text-anchor", "middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .call(g => g.selectAll("g")
      .data(yScale.ticks(y_ticks_num).reverse())
      .join("g")
        .attr("fill", "none")
        .call(g => g.append("circle")
            .attr("stroke", "#000")
            .attr("stroke-opacity", 0.2)
            .attr("r", yScale))
        .call(g => g.append("text")
            .attr("y", d => -yScale(d))
            .attr("dy", "0.35em")
            .attr("stroke", "#fff")
            .attr("stroke-width", 5)
            .text((x, i) => x)
          .clone(true)
            .attr("y", d => yScale(d))
          .selectAll(function() { return [this, this.previousSibling]; })
          .clone(true)
            .attr("fill", "currentColor")
            .attr("stroke", "none")))
  
  const svg = select(`#${svgId}`)
      .attr("width", svgSide)
      .attr("height", svgSide)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round");
  
  const container = svg.append('g')
      .attr('class', 'container')
      .attr('transform', `translate(${ svgSide/2 },${ svgSide/2 })`);

  container.append("path")
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1.5)
      .attr("d", line
          .radius(d => yScale(d.count))
        (data_weeks));
  
  container
    .selectAll('path')
    .data(data_weeks)
    .join('path')
    .style('fill', d => color(d.count))
    .style('stroke', d => color(d.count))
    .attr('d', arcDefinition)
  
  container.append("g")
      .call(yAxis);
  
  container.append("g")
      .call(xAxis);
  
  container.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 18)
    .attr("font-weight", "bold")
    .attr("x", 0)
    .attr("y", 0)
    .style("text-anchor", "middle")
    .text(label);
}